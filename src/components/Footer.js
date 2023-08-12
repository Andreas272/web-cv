import "./Footer.css";

export function Footer() {
    return (
        <div className="footer">
            {
                <center>
                    <Contacts />
                </center>
            }
        </div>
    );
}


function Contacts() {
    return (
        <div className="contacts">
            <p>
                Andreas Valentin Pedersen <br></br>
                andreasvalentin<wbr></wbr>@hotmail.com <br></br>
                +45 25 48 46 70 <br></br>
            </p>
        </div>
    );
}