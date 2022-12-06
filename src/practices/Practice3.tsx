export const Practice3 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice3 = () => {
    let total: number = 0;
    total = calcTotalFee(300);
    console.log(total);
  };

  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice3}>練習問題3を実行</button>
    </div>
  );
};
