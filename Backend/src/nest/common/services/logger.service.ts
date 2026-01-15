import { Injectable, LoggerService as NestLoggerService, Scope } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

type LogLevel = 'LOG' | 'ERROR' | 'WARN' | 'DEBUG' | 'VERBOSE';
type LogMessage = string | Error | Record<string, unknown>;

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements NestLoggerService {
  private logFilePath: string;
  private context?: string;
  private writeQueue: Promise<void> = Promise.resolve();

  constructor() {
    const logsDir = path.join(process.cwd(), 'logs');
    // Ensure logs directory exists (fire and forget)
    fs.mkdir(logsDir, { recursive: true }).catch(() => {});
    this.logFilePath = path.join(logsDir, `app-${this.getDateString()}.log`);
  }

  setContext(context: string) {
    this.context = context;
  }

  log(message: LogMessage, context?: string) {
    this.printMessage(message, 'LOG', context);
  }

  error(message: LogMessage, trace?: string, context?: string) {
    this.printMessage(message, 'ERROR', context);
    if (trace) {
      this.writeToFile(`[TRACE] ${trace}\n`);
    }
  }

  warn(message: LogMessage, context?: string) {
    this.printMessage(message, 'WARN', context);
  }

  debug(message: LogMessage, context?: string) {
    this.printMessage(message, 'DEBUG', context);
  }

  verbose(message: LogMessage, context?: string) {
    this.printMessage(message, 'VERBOSE', context);
  }

  private printMessage(message: LogMessage, level: LogLevel, context?: string) {
    const timestamp = new Date().toISOString();
    const ctx = context || this.context || 'Application';
    const logMessage = `[${timestamp}] [${level}] [${ctx}] ${this.formatMessage(message)}`;

    // Console log with colors
    const coloredMessage = this.colorize(logMessage, level);
    console.log(coloredMessage);

    // Write to file asynchronously (non-blocking)
    this.writeToFile(logMessage + '\n');
  }

  private writeToFile(message: string): void {
    // Queue writes to prevent file corruption from concurrent writes
    this.writeQueue = this.writeQueue.then(
      () => fs.appendFile(this.logFilePath, message).catch(() => {}),
      () => fs.appendFile(this.logFilePath, message).catch(() => {})
    );
  }

  private formatMessage(message: LogMessage): string {
    if (typeof message === 'string') {
      return message;
    }
    if (message instanceof Error) {
      return message.message + (message.stack ? '\n' + message.stack : '');
    }
    if (typeof message === 'object') {
      return JSON.stringify(message, null, 2);
    }
    return String(message);
  }

  private colorize(message: string, level: string): string {
    const colors: Record<string, string> = {
      LOG: '\x1b[32m',     // Green
      ERROR: '\x1b[31m',   // Red
      WARN: '\x1b[33m',    // Yellow
      DEBUG: '\x1b[36m',   // Cyan
      VERBOSE: '\x1b[35m', // Magenta
    };
    const reset = '\x1b[0m';
    const color = colors[level] || '';
    return `${color}${message}${reset}`;
  }

  private getDateString(): string {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }
}
