function bfs(graph, root, target) {
    let resOut = document.querySelector('.BFS .result');
    let resultPath = [];

    let settled = [];
    let queue = [];
    queue.push(root);
    
    let pathQueue = [];
    pathQueue.push([root]);

    while(queue.length > 0){
        let curr = queue.shift();
        let currPath = pathQueue.shift();
        if(curr == target){
            resultPath = currPath;
            break;
        }else {
            if(graph[curr]){
                let filtered = graph[curr].filter(el => {
                    for (const elem of settled) {
                        if(elem === el){
                            return false;
                        }
                    }
                    return true;
                });
                filtered.forEach(el => {
                    pathQueue.push(currPath.concat([el]));
                    queue.push(el);
                });
            }
        }
        settled.push(curr);
    }

    resultPath = resultPath.map(v => {
        return nodes[v];
    });
    let result = resultPath.join(' => ');
    resOut.innerText = result;
}