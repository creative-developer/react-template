import { Store, iNotification } from 'react-notifications-component';

interface INotificationProps extends Omit<iNotification, 'container'> {}

export class ReactNotification {
  static addNotification = (options: INotificationProps) => {
    const { dismiss, slidingExit, ...rest } = options;

    Store.addNotification({
      container: 'bottom-left',
      dismiss: {
        duration: 3000,
        showIcon: true,
        pauseOnHover: true,
        ...dismiss,
      },
      slidingExit: {
        duration: 100,
        timingFunction: 'ease-out',
        delay: 0,
        ...slidingExit,
      },
      ...rest,
    });
  };

  static showError = (errorMessage: string | undefined) => {
    if (!errorMessage?.length) {
      return;
    }

    this.addNotification({ type: 'danger', message: errorMessage });
  };

  static showSuccess = (successMessage: string | undefined) => {
    if (!successMessage?.length) {
      return;
    }

    this.addNotification({ type: 'success', message: successMessage });
  };

  static showWarning = (warningMessage: string | undefined) => {
    if (!warningMessage?.length) {
      return;
    }

    this.addNotification({ type: 'warning', message: warningMessage });
  };
}
