/**
 * Standardized status colors for the application
 * Ensures consistency across all components
 */

export type StatusType = 'PENDING' | 'IN_DEVELOPMENT' | 'PUBLISHED';

export interface StatusConfig {
  label: string;
  badgeVariant: 'success' | 'warning' | 'info';
  dotColor: string;
  className: string;
}

/**
 * Standard status configuration using semantic color names
 * This ensures all status displays use the same colors
 */
export const statusConfig: Record<StatusType, StatusConfig> = {
  PENDING: {
    label: 'Pending',
    badgeVariant: 'warning',
    dotColor: 'bg-warning',
    className: 'border-warning-border bg-warning-bg text-warning-fg',
  },
  IN_DEVELOPMENT: {
    label: 'In Development',
    badgeVariant: 'info',
    dotColor: 'bg-info',
    className: 'border-info-border bg-info-bg text-info-fg',
  },
  PUBLISHED: {
    label: 'Published',
    badgeVariant: 'success',
    dotColor: 'bg-success',
    className: 'border-success-border bg-success-bg text-success-fg',
  },
};

/**
 * Get status configuration by status type
 */
export function getStatusConfig(status: StatusType): StatusConfig {
  return statusConfig[status] || statusConfig.PENDING;
}

/**
 * Get badge variant for a status
 */
export function getStatusBadgeVariant(status: StatusType): 'success' | 'warning' | 'info' {
  return statusConfig[status].badgeVariant;
}

/**
 * Get status label
 */
export function getStatusLabel(status: StatusType): string {
  return statusConfig[status].label;
}

/**
 * Get status dot color class
 */
export function getStatusDotColor(status: StatusType): string {
  return statusConfig[status].dotColor;
}
