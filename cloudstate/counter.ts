import { cloudstate } from "freestyle-sh";

@cloudstate
export class CounterCS {
  static id = "counter" as const;
  count = 0;
  increment() {
    return ++this.count;
  }
  getCount() {
    return this.count;
  }
}
