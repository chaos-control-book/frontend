class LocalStorageService implements Storage {
  private cache = new Map<string, string>();

  get length(): number {
    return this.cache.size;
  }

  public getItem(key: string) {
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }

    if (!this.cache.has(key)) {
      return null;
    }

    return this.cache.get(key) ?? null;
  }

  public setItem(key: string, value: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }

    this.cache.set(key, value);
  }

  public clear(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }

    this.cache.clear();
  }

  public key(index: number): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.key(index);
    }

    return Array.from(this.cache.keys())[index];
  }

  public removeItem(key: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(key);
    }

    this.cache.delete(key);
  }
}

export const LocalStorage = new LocalStorageService();
