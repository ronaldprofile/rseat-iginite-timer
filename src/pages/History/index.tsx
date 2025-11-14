import { useCycles } from '../../context/Cycles/useCycles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
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
            {cycles.map(cycle => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task} </td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <StatusTask statusColor='green'>Concluído</StatusTask>
                    )}

                    {cycle.interruptedDate && (
                      <StatusTask statusColor='red'>Interrompido</StatusTask>
                    )}

                    {!cycle.interruptedDate && !cycle.finishedDate && (
                      <StatusTask statusColor='yellow'>Em andamento</StatusTask>
                    )}
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
