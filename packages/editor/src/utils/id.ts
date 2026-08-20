const existingIds = new Set<string>();

export function addId(id: string): void {
    existingIds.add(id);
}

export function createUniqueId(): string {
    let newId: string;
    do {
        newId = Date.now().toString(36);
    } while (existingIds.has(newId));
    existingIds.add(newId);
    return newId;
}