import toast, { Toast } from 'react-hot-toast';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

interface ToastOptions {
  duration?: number;
}

const CustomToast = ({ 
  t,
  type, 
  message, 
  icon: Icon 
}: { 
  t: Toast;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  icon: React.ElementType;
}) => {
  const styles = {
    success: {
      wrapper: 'bg-success-bg border-success-border dark:bg-success-bg/90',
      iconContainer: 'bg-success text-success-fg shadow-success/30',
      title: 'text-success-fg',
      closeBtn: 'text-success-fg/60 hover:text-success-fg hover:bg-success-fg/10'
    },
    error: {
      wrapper: 'bg-error-bg border-error-border dark:bg-error-bg/90',
      iconContainer: 'bg-error text-error-fg shadow-error/30',
      title: 'text-error-fg',
      closeBtn: 'text-error-fg/60 hover:text-error-fg hover:bg-error-fg/10'
    },
    warning: {
      wrapper: 'bg-warning-bg border-warning-border dark:bg-warning-bg/90',
      iconContainer: 'bg-warning text-warning-fg shadow-warning/30',
      title: 'text-warning-fg',
      closeBtn: 'text-warning-fg/60 hover:text-warning-fg hover:bg-warning-fg/10'
    },
    info: {
      wrapper: 'bg-info-bg border-info-border dark:bg-info-bg/90',
      iconContainer: 'bg-info text-info-fg shadow-info/30',
      title: 'text-info-fg',
      closeBtn: 'text-info-fg/60 hover:text-info-fg hover:bg-info-fg/10'
    },
  };

  const style = styles[type];

  return (
    <div 
      className={`
        pointer-events-auto flex w-full max-w-[420px] items-start gap-4 
        rounded-2xl border p-4 shadow-lg backdrop-blur-xl transition-all duration-300
        ${t.visible ? 'animate-in slide-in-from-top-4 fade-in-0 zoom-in-95' : 'animate-out slide-out-to-top-4 fade-out-0 zoom-out-95'}
        ${style.wrapper}
      `}
    >
      <div className={`mt-0.5 flex flex-shrink-0 items-center justify-center rounded-full p-2 shadow-sm ${style.iconContainer}`}>
        <Icon className="h-[18px] w-[18px]" strokeWidth={2.5} />
      </div>
      
      <div className="flex w-full flex-col justify-center gap-1 min-w-0 flex-1 pt-1">
        <p className={`text-[15px] font-medium leading-relaxed ${style.title}`}>
          {message}
        </p>
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className={`mt-0.5 flex-shrink-0 rounded-full p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${style.closeBtn}`}
      >
        <span className="sr-only">Close</span>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.custom(
      (t) => <CustomToast t={t} type="success" message={message} icon={CheckCircle} />,
      { duration: options?.duration || 3000, ...options }
    );
  },

  error: (message: string, options?: ToastOptions) => {
    toast.custom(
      (t) => <CustomToast t={t} type="error" message={message} icon={XCircle} />,
      { duration: options?.duration || 4000, ...options }
    );
  },

  warning: (message: string, options?: ToastOptions) => {
    toast.custom(
      (t) => <CustomToast t={t} type="warning" message={message} icon={AlertTriangle} />,
      { duration: options?.duration || 4000, ...options }
    );
  },

  info: (message: string, options?: ToastOptions) => {
    toast.custom(
      (t) => <CustomToast t={t} type="info" message={message} icon={Info} />,
      { duration: options?.duration || 3500, ...options }
    );
  },
};
