type IdMapper = (index: number) => string;

export default class IdGenerator {
  private index: number;

  static create(idMapper: IdMapper): IdGenerator {
    const idGenerator: IdGenerator = new IdGenerator();

    idGenerator.mapIndex = idMapper;

    return idGenerator;
  }

  constructor() {
    this.index = 1;
  }

  public get(): string {
    this.index++;
    if (this.index >= Number.MAX_SAFE_INTEGER - 10) {
      this.index = 1;
    }
    return this.mapIndex(this.index);
  }

  private mapIndex = (index: number): string => {
    return `${index}`;
  };
}
