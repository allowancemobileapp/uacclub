export type Program = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  imageId: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  description: string;
  imageId: string;
};

export type ProgramCategory = {
  slug: string;
  title: string;
  description: string;
  imageId: string;
  items: string[];
  quote?: string;
};

export type CoreValue = {
  value: string;
  description: string;
}
