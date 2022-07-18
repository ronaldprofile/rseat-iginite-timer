import { HistoryContainer, HistoryList, StatusTask } from './styles'

export function History() {
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
            <tr>
              <td>Conserto de débitos técnicos </td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusTask statusColor="red">Interrompido</StatusTask>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
