export enum Status {
  available = 'available',
  pending = 'pending',
  sold = 'sold',
}

export type Pet = {
  id: number,
  status: Status,
  name: string,
  photoUrls: string[],
  tags: string[],
}