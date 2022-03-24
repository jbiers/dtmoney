import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td>R$12.000</td>
                        <td>Software Dev</td>
                        <td>21/02/2022</td>
                    </tr>
                    <tr>
                        <td>Website development</td>
                        <td>R$12.000</td>
                        <td>Software Dev</td>
                        <td>21/02/2022</td>
                    </tr>
                    <tr>
                        <td>Website development</td>
                        <td>R$12.000</td>
                        <td>Software Dev</td>
                        <td>21/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}