function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,

    addNeighbor: function (node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode: function (key) {
      nodes.push(createNode(key));
    },
    getNode: function (key) {

      return nodes.find(function (node) {
        return node.key === key;
      });
    },
    addEdge: function (node1key, node2key) {
      const node1 = this.getNode(node1key);

      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }

    },
    print: function () {
      return nodes.map(function ({ key, neighbors }) {
        let result = key;

        if (neighbors.length) {
          result += ` => ${neighbors.map(function (neighbor) {
            return neighbor.key;
          }).join(' ')}`;
        }

        return result;
      }).join('\n');
    }
  }
}

const graph = createGraph(true);

graph.addNode('Rudy');
graph.addNode('Irwin');
graph.addNode('Steve');
graph.addNode('Annie');

graph.addEdge('Rudy', 'Annie');
graph.addEdge('Rudy', 'Irwin');
graph.addEdge('Rudy', 'Steve');
graph.addEdge('Irwin', 'Annie');
graph.addEdge('Irwin', 'Steve');
graph.addEdge('Steve', 'Irwin');
graph.addEdge('Steve', 'Annie');
graph.addEdge('Annie', 'Steve');

console.log(graph.print());