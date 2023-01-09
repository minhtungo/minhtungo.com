type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Project extends Base {
  description: string;
  image: Image;
  name: string;
  githubURL: string;
  liveURL: string;
  tools: string[];
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}
