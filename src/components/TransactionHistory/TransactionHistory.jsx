import css from './TransactionHistory.module.css';
import clsx from 'clsx';

const TransactionHistory = ({ transactions }) => {
  function isOdd(index) {
    return !(index % 2 === 0);
  }

  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => (
          <tr
            className={clsx(css.tr, { [css.grey]: isOdd(index) })}
            key={transaction.id}
          >
            <td className={(css.td, css.tc)}>{transaction.type}</td>
            <td className={css.td}>{transaction.amount}</td>
            <td className={css.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
