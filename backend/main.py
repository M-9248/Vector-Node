
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict


app = FastAPI()

# Allow all origins for development (adjust for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


class Edge(BaseModel):
    id: str
    source: str
    target: str

class Node(BaseModel):
    id: str
    # other fields are ignored for DAG check

class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    from collections import defaultdict, deque
    graph = defaultdict(list)
    indegree = {node.id: 0 for node in nodes}
    for edge in edges:
        graph[edge.source].append(edge.target)
        indegree[edge.target] += 1
    # Kahn's algorithm
    q = deque([nid for nid, deg in indegree.items() if deg == 0])
    visited = 0
    while q:
        curr = q.popleft()
        visited += 1
        for neighbor in graph[curr]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)
    return visited == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(request: PipelineRequest):
    nodes = request.nodes
    edges = request.edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag = is_dag(nodes, edges)
    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": dag}
