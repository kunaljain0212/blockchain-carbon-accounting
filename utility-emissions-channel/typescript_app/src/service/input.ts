export interface Input {
    body: Record<string, string>;
    header: Record<string, string>;
    query: Record<string, string>;
    file?: Buffer;
    params?: Record<string, string>;
}
