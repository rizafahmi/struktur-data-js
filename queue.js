function createQueue() {
  const queue = [];

  return {
    enqueue: function (value) {
      queue.unshift(value);
    },
    dequeue: function () {
      queue.pop();
    },
    peek: function () {
      return queue[queue.length - 1];
    },
    size: function () {
      return queue.length;
    }
  }
}

const q = createQueue();
q.enqueue('Create script for data structure course');
q.enqueue('Create code example for data structure course');
q.enqueue('Record data structure course');
q.enqueue('Vacation');

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.peek());