import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
        <div className={styles.container}>
            <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => <tr key={item.id} className={items.indexOf(item) % 2 === 0 ? styles.row_even : styles.row_odd}>
                    <td className={styles.type}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>)}
            </tbody>
            </table>
        </div>);
}