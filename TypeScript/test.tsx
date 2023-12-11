import React from 'react'

type User = {
	id: string
	name: string
	age: number
}

type ContextType = {
	users: User[]
	addUser: ({ name, age }: { name: String; age: number }) => void
}

const Context = React.createContext<ContextType | null>(null)

export function useUsers() {
	const usersContext = React.useContext(Context)
	if (usersContext == null) {
		throw new Error('Must use within provider')
	}
	return usersContext
}

export default function App() {
	const [users, setUsers] = React.useState<User[]>([])

	React.useEffect(() => {
		getUsers().then(setUsers)
	}, [])

	function addUser({ name, age }: { name: string; age: number }) {
		setUsers((prevUsers) => {
			return [...prevUsers, { id: crypto.randomUUID(), name, age }]
		})
	}

	return (
		<Context.Provider value={{ users }}>
			<h1>Some stuff</h1>
		</Context.Provider>
	)
}

function getUsers() {
	return Promise.resolve([{ id: crypto.randomUUID(), name: 'Phil', age: 35 }])
}
