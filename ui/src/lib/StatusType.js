class StatusType {
    static assigned = new StatusType('Assigned');
    static fixed = new StatusType('Fixed');
    static closed = new StatusType('Closed');
  
    constructor(name) {
      this.name = name;
    }
    toString() {
      return `StatusType.${this.name}`;
    }
  }

export default  new StatusType();