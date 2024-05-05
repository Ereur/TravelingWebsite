declare module 'tailwindcss-debug-screens' {
    const content: any;
    export default content;
  }
  declare global {
    namespace NodeJS {
        interface Global {
            prisma: PrismaClient;
        }
    }
}

declare module 'jsonwebtoken';
