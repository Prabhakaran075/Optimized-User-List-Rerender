import UserList from './components/UserList'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <motion.nav 
        className="bg-white shadow-lg backdrop-blur-lg bg-opacity-80"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-6 text-center">
          <motion.h1 
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            User List
          </motion.h1>
        </div>
      </motion.nav>
      <main className="py-8">
        <UserList />
      </main>
    </div>
  )
}

export default App