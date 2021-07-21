const CircularQueue = require('../Array, N-dimensional arrays,Stack,Queues/A12');

test('Create a circular queue',()=> {
    let cq = new CircularQueue();
    cq.enQueue(1);
    expect(cq.front).toEqual(cq.rear);
    cq.enQueue(2);
    cq.enQueue(3);
    cq.enQueue(4);
    cq.enQueue(5);
    cq.enQueue(6);
    expect(cq.deQueue()).toBe(1);
    expect(cq.deQueue()).toBe(2);
    expect(cq.deQueue()).toBe(3);
    expect(cq.deQueue()).toBe(4);
    expect(cq.deQueue()).toBe(5);
    expect(cq.front).toEqual(cq.rear);
})