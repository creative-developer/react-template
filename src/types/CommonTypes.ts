export type NotificationMessages<K extends keyof any> = {
  [P in K]: Readonly<{ success?: string; error?: string; warning?: string }>;
};

export type WrappedPromiseType<T> = Promise<{ status: 'fulfilled'; value: T } | { status: 'rejected'; reason: any }>[];
