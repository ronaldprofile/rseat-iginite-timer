import { useCycles } from '../../context/Cycles/useCycles'
import { HistoryContainer, HistoryList, StatusTask } from './styles'

export function History() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>tarefa</th>
              <th>Duração</th>
              <th>inicio</th>
              <th>status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task} </td>
                  <td>25 minutos</td>
                  <td>Há cerca de 2 meses</td>
                  <td>
                    <StatusTask statusColor="red">Interrompido</StatusTask>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
