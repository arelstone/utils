export class Config {
  static get (key: string, fallback?: string): string {
    const value = process.env[key] || fallback
    if (value === undefined) {
      throw new Error(`Please provide env variable for ${key}`)
    }

    return value
  }

  static isDevelopment: boolean = Config.get('NODE_ENV') === 'development'
}
