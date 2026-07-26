declare module 'mercadopago' {
  const mercadopago: {
    configure: (options: { access_token?: string }) => void;
    preferences: {
      create: (preferences: unknown) => Promise<unknown>;
    };
    payment: {
      findById: (id: string) => Promise<unknown>;
      search: (options?: { qs?: Record<string, unknown> }) => Promise<unknown>;
    };
  };
  export default mercadopago;
}
