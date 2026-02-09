{
  class Counter {
    static count: number = 0;
    static increment() {
      Counter.count = Counter.count + 1;
      return Counter.count;
    }
    static decrement() {
      Counter.count = Counter.count - 1;
      return Counter.count;
    }
  }

  //Counter.count +=1; // Also valid
  //const instance1 = new Counter();
  //const instance2 = new Counter();

  //console.log(`Count: ${instance1.increment()}`); //Count = 1
  //console.log(`Count: ${instance1.increment()}`); //Count = 2

  //console.log(`Count: ${instance2.increment()}`); //Count = 3
  //console.log(`Count: ${instance2.decrement()}`); //Count = 2

  Counter.increment() //count = 1
  Counter.decrement() //count = 0


  
}
