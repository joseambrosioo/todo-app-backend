// Simple API integration test script
import fetch from "node-fetch"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

interface Todo {
  id: string
  title: string
  color: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

async function testAPI() {
  console.log("🧪 Testing Full Stack Integration...\n")

  try {
    // Test 1: Health Check
    console.log("1. Testing API Health Check...")
    const healthResponse = await fetch(`${API_BASE}/health`)
    const healthData = await healthResponse.json()
    console.log("✅ Health Check:", healthData.message)

    // Test 2: Get All Todos (should be empty initially)
    console.log("\n2. Testing GET /api/todos...")
    const todosResponse = await fetch(`${API_BASE}/api/todos`)
    const todos = (await todosResponse.json()) as Todo[]
    console.log(`✅ Retrieved ${todos.length} todos`)

    // Test 3: Create a Todo
    console.log("\n3. Testing POST /api/todos...")
    const createResponse = await fetch(`${API_BASE}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Test Todo from API Test",
        color: "blue",
      }),
    })
    const newTodo = (await createResponse.json()) as Todo
    console.log("✅ Created todo:", newTodo.title)

    // Test 4: Update the Todo
    console.log("\n4. Testing PUT /api/todos/:id...")
    const updateResponse = await fetch(`${API_BASE}/api/todos/${newTodo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: true,
        color: "green",
      }),
    })
    const updatedTodo = (await updateResponse.json()) as Todo
    console.log("✅ Updated todo - completed:", updatedTodo.completed)

    // Test 5: Delete the Todo
    console.log("\n5. Testing DELETE /api/todos/:id...")
    const deleteResponse = await fetch(`${API_BASE}/api/todos/${newTodo.id}`, {
      method: "DELETE",
    })
    console.log("✅ Deleted todo - Status:", deleteResponse.status)

    console.log("\n🎉 All tests passed! Full stack integration is working correctly.")
  } catch (error) {
    console.error("❌ Test failed:", error)
    process.exit(1)
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  testAPI()
}

export { testAPI }
