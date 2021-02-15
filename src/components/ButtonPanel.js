import Button from './Button';

function ButtonPanel() {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  return (
    <>
      <div className="group1">
        {group1.map(element => (<Button name={element} key={group1.indexOf(element)} />
        ))}
      </div>

      <div className="group2">
        {group2.map(element => (<Button name={element} key={group2.indexOf(element)} />
        ))}
      </div>

      <div className="group3">
        {group3.map(element => (<Button name={element} key={group3.indexOf(element)} />
        ))}
      </div>

      <div className="group4">
        {group4.map(element => (<Button name={element} key={group4.indexOf(element)} />
        ))}
      </div>

      <div className="group5">
        {group5.map(element => (<Button name={element} key={group5.indexOf(element)} />
        ))}
      </div>
    </>
  );
}
export default ButtonPanel;
