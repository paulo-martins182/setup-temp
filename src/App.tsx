import React from 'react'
import { Table } from 'antd'
import '../src/styles/global.css'

const App: React.FC = () => {
  const dataSource = Array.from({ length: 100 }, (_, index) => ({
    key: index,
    name: `Nome ${index + 1}`,
    age: Math.floor(Math.random() * 50) + 20,
    address: `Rua ${index + 1}, Cidade ${index % 10}`
  }))

  // Definição das colunas
  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Endereço',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <div style={{ padding: 20 }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </div>
  )
}

export default App
