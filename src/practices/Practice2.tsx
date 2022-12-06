export const Practice2 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice2 = () => {
    console.log(calcTotalFee(500));
  };

  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice2}>練習問題2を実行</button>
    </div>
  );
};
