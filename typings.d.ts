type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Project extends Base {
  name: string;
  description: string;
  image: Image;
  gifImage: Image;
  githubURL: string;
  liveURL: string;
  tools: string[];
}

interface Repo extends Base {
  name: string;
  description: string;
  githubURL: string;
  liveURL: string;
  tools: string[];
}

interface Journey extends Base {
  title: string;
  description: string;
  icon: string;
  color: string;
  date: string;
  status: string;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: 'reference';
}
