import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Style, Card } from "./style";
import { Button } from "../../style";
import { Bounce } from "react-reveal";
import axios from "axios";

const Tests = ({ user }) => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    fifteen: false,
  });
  const [key, setkey] = useState(false);
  const [score, setscore] = useState(0);
  let scoreForSend = 0;

  useEffect(() => {
    if (!user.name || !user.lastname) {
      navigate("/login");
    }
  }, []);

  const bot = {
    TOKEN: "6306939440:AAGCuoGmRvxWZjl4pNuHsnjf-LCs9yxId-U",
    chatID: "5836815735",
  };

  const copmlete = () => {
    setkey(true);
    if (state.one === true) setscore((p) => (p += 1));
    if (state.two === true) setscore((p) => (p += 1));
    if (state.three === true) setscore((p) => (p += 1));
    if (state.four === true) setscore((p) => (p += 1));
    if (state.five === true) setscore((p) => (p += 1));
    if (state.six === true) setscore((p) => (p += 1));
    if (state.seven === true) setscore((p) => (p += 1));
    if (state.eight === true) setscore((p) => (p += 1));
    if (state.nine === true) setscore((p) => (p += 1));
    if (state.ten === true) setscore((p) => (p += 1));
    if (state.eleven === true) setscore((p) => (p += 1));
    if (state.twelve === true) setscore((p) => (p += 1));
    if (state.thirteen === true) setscore((p) => (p += 1));
    if (state.fourteen === true) setscore((p) => (p += 1));
    if (state.fifteen === true) setscore((p) => (p += 1));

    if (state.one === true) scoreForSend += 1;
    if (state.two === true) scoreForSend += 1;
    if (state.three === true) scoreForSend += 1;
    if (state.four === true) scoreForSend += 1;
    if (state.five === true) scoreForSend += 1;
    if (state.six === true) scoreForSend += 1;
    if (state.seven === true) scoreForSend += 1;
    if (state.eight === true) scoreForSend += 1;
    if (state.nine === true) scoreForSend += 1;
    if (state.ten === true) scoreForSend += 1;
    if (state.eleven === true) scoreForSend += 1;
    if (state.twelve === true) scoreForSend += 1;
    if (state.thirteen === true) scoreForSend += 1;
    if (state.fourteen === true) scoreForSend += 1;
    if (state.fifteen === true) scoreForSend += 1;

    axios.post(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage`, {
      chat_id: bot.chatID,
      text: `Full Name: *${user.name} ${user.lastname}*\nScore: *${scoreForSend} from 15*`,
      parse_mode: "Markdown",
    });
  };

  const again = () => {
    setkey(false);
    setscore(0);
    scoreForSend = 0;
    setstate({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false,
      fourteen: false,
      fifteen: false,
    });
  };

  return (
    <Style>
      {key === false ? (
        <>
          <h1 className="hello"> Salom {user.name} </h1>

          {/* test 1 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>1. Css Internal usli qanday ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i1-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, one: false }))}
                  >
                    <input name={"1"} type="radio" id={"i1-1"} />
                    <h2>A - Tagni o'zida css yozish</h2>
                  </div>
                </label>
                <label htmlFor={"i1-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, one: true }))}
                  >
                    <input name={"1"} type="radio" id={"i1-2"} />
                    <h2>B - Head tagini ichida css yozish</h2>
                  </div>
                </label>
                <label htmlFor={"i1-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, one: false }))}
                  >
                    <input name={"1"} type="radio" id={"i1-3"} />
                    <h2>C - Title taglari orasida css yozish</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 1 */}
          {/* test 2 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>2. 1vh birligi qaysi variantda to'g'ri ko'rsatilgan ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i2-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, two: false }))}
                  >
                    <input name={"2"} type="radio" id={"i2-1"} />
                    <h2>A - Ekran kengligining 1%</h2>
                  </div>
                </label>
                <label htmlFor={"i2-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, two: false }))}
                  >
                    <input name={"2"} type="radio" id={"i2-2"} />
                    <h2>B - Ekran uzunligining 10%</h2>
                  </div>
                </label>
                <label htmlFor={"i2-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, two: true }))}
                  >
                    <input name={"2"} type="radio" id={"i2-3"} />
                    <h2>C - Ekran balandligining 1%</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 2 */}
          {/* test 3 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>3. To'g'ri yozilgan checkboxni belgilang ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i3-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, three: false }))}
                  >
                    <input name={"3"} type="radio" id={"i3-1"} />
                    <h2>A - {"<checkbox>"}</h2>
                  </div>
                </label>
                <label htmlFor={"i3-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, three: false }))}
                  >
                    <input name={"3"} type="radio" id={"i3-2"} />
                    <h2>B - {'<input type="check">'}</h2>
                  </div>
                </label>
                <label htmlFor={"i3-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, three: true }))}
                  >
                    <input name={"3"} type="radio" id={"i3-3"} />
                    <h2>C - {'<input type="checkbox">'}</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 3 */}
          {/* test 4 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>
                  4. Display paramaetri Block bolgan elemntlarni belgilang ?
                </h1>
              </div>
              <div className="radios">
                <label htmlFor={"i4-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, four: false }))}
                  >
                    <input name={"4"} type="radio" id={"i4-1"} />
                    <h2>A - {"<div> / <button> / <i>"}</h2>
                  </div>
                </label>
                <label htmlFor={"i4-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, four: true }))}
                  >
                    <input name={"4"} type="radio" id={"i4-2"} />
                    <h2>B - {"<div> / <p> /  <h1>"}</h2>
                  </div>
                </label>
                <label htmlFor={"i4-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, four: false }))}
                  >
                    <input name={"4"} type="radio" id={"i4-3"} />
                    <h2>C - {"<label> / <div> / <span> "}</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 4 */}
          {/* test 5 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>5. Matn maydonini yaratish uchun to'g'ri kodni toping!</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i5-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, five: false }))}
                  >
                    <input name={"5"} type="radio" id={"i5-1"} />
                    <h2>A - {'<input type="textbox">'}</h2>
                  </div>
                </label>
                <label htmlFor={"i5-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, five: false }))}
                  >
                    <input name={"5"} type="radio" id={"i5-2"} />
                    <h2>B - {'<input type="textarea">'}</h2>
                  </div>
                </label>
                <label htmlFor={"i5-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, five: true }))}
                  >
                    <input name={"5"} type="radio" id={"i5-3"} />
                    <h2>C - {"<textarea>"}</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 5 */}
          {/* test 6 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>
                  6. Elementga position fixed berilganda margin ishlatsa
                  ishlaydimi ?
                </h1>
              </div>
              <div className="radios">
                <label htmlFor={"i6-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, six: false }))}
                  >
                    <input name={"6"} type="radio" id={"i6-1"} />
                    <h2>A - Yo'q</h2>
                  </div>
                </label>
                <label htmlFor={"i6-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, six: true }))}
                  >
                    <input name={"6"} type="radio" id={"i6-2"} />
                    <h2>B - Ha</h2>
                  </div>
                </label>
                <label htmlFor={"i6-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, six: false }))}
                  >
                    <input name={"6"} type="radio" id={"i6-3"} />
                    <h2>C - Tog'ri qavob yoq</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 6 */}
          {/* test 7 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>7. Media Querydagi screen codi nimani anglatadi ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i7-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, seven: true }))}
                  >
                    <input name={"7"} type="radio" id={"i7-1"} />
                    <h2>A - Ekran 0 dan boshlanayotganini</h2>
                  </div>
                </label>
                <label htmlFor={"i7-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, seven: false }))}
                  >
                    <input name={"7"} type="radio" id={"i7-2"} />
                    <h2>B - Ekran 0 dan boshlanib 1200px da tugaydi</h2>
                  </div>
                </label>
                <label htmlFor={"i7-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, seven: false }))}
                  >
                    <input name={"7"} type="radio" id={"i7-3"} />
                    <h2>C - Ekran 0 dan boshlanib 600px da tugaydi</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 7 */}
          {/* test 8 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>
                  8. Bizda 4-ta button bor ular yonma-yon chiqishi uchun nima
                  qilishimimz kerak ?
                </h1>
              </div>
              <div className="radios">
                <label htmlFor={"i8-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eight: false }))}
                  >
                    <input name={"8"} type="radio" id={"i8-1"} />
                    <h2>
                      A - Buttonlarni o'rab turgan elementga display flex
                      berishimiz kerak
                    </h2>
                  </div>
                </label>
                <label htmlFor={"i8-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eight: true }))}
                  >
                    <input name={"8"} type="radio" id={"i8-2"} />
                    <h2>B - Hech narsa qilmaymiz</h2>
                  </div>
                </label>
                <label htmlFor={"i8-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eight: false }))}
                  >
                    <input name={"8"} type="radio" id={"i8-3"} />
                    <h2>C - Buttonlarga position absolute beishimiz kerak</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 8 */}
          {/* test 9 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>9. Sass da o'zgaruvchilar qanday yoziladi ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i9-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, nine: true }))}
                  >
                    <input name={"9"} type="radio" id={"i9-1"} />
                    <h2>A - $MyColor : #000</h2>
                  </div>
                </label>
                <label htmlFor={"i9-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, nine: false }))}
                  >
                    <input name={"9"} type="radio" id={"i9-2"} />
                    <h2>B - $MyColor = #000</h2>
                  </div>
                </label>
                <label htmlFor={"i9-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, nine: false }))}
                  >
                    <input name={"9"} type="radio" id={"i9-3"} />
                    <h2>C - $MyColor - #000</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 9 */}
          {/* test 10 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>
                  10. Box-shadow ga beriladigan uchinchi qiymat qanday vazifani
                  bajaradi ?
                </h1>
              </div>
              <div className="radios">
                <label htmlFor={"i10-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, ten: true }))}
                  >
                    <input name={"10"} type="radio" id={"i10-1"} />
                    <h2>A - Soyaning yoyilishi</h2>
                  </div>
                </label>
                <label htmlFor={"i10-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, ten: false }))}
                  >
                    <input name={"10"} type="radio" id={"i10-2"} />
                    <h2>B - Soyaning tepadan pastga surilishi</h2>
                  </div>
                </label>
                <label htmlFor={"i10-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, ten: false }))}
                  >
                    <input name={"10"} type="radio" id={"i10-3"} />
                    <h2>C - Soyaning chapdan o'nga surilishi</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 10 */}
          {/* test 11 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>11. Background: url(); shunday yozsa kod ishlaydimi?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i11-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eleven: true }))}
                  >
                    <input name={"11"} type="radio" id={"i11-1"} />
                    <h2>A - Ha ishlaydi</h2>
                  </div>
                </label>
                <label htmlFor={"i11-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eleven: false }))}
                  >
                    <input name={"11"} type="radio" id={"i11-2"} />
                    <h2>B - Yo'q ishlamaydi Background-size ga yozish kerak</h2>
                  </div>
                </label>
                <label htmlFor={"i11-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, eleven: false }))}
                  >
                    <input name={"11"} type="radio" id={"i11-3"} />
                    <h2>
                      C - Yo'q ishlamaydi Background-image ga yozish kerak
                    </h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 11 */}
          {/* test 12 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>12. Qaysi CSS xususiyati text hajmini boshqaradi?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i12-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, twelve: false }))}
                  >
                    <input name={"12"} type="radio" id={"i12-1"} />
                    <h2>A - fon-size</h2>
                  </div>
                </label>
                <label htmlFor={"i12-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, twelve: true }))}
                  >
                    <input name={"12"} type="radio" id={"i12-2"} />
                    <h2>B - font-size</h2>
                  </div>
                </label>
                <label htmlFor={"i12-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, twelve: false }))}
                  >
                    <input name={"12"} type="radio" id={"i12-3"} />
                    <h2>C - text-size</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 12 */}
          {/* test 13 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>13. Bootstrapda necha xil rang bor?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i13-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, thirteen: false }))}
                  >
                    <input name={"13"} type="radio" id={"i13-1"} />
                    <h2>A - 8 ta</h2>
                  </div>
                </label>
                <label htmlFor={"i13-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, thirteen: true }))}
                  >
                    <input name={"13"} type="radio" id={"i13-2"} />
                    <h2>B - 9 ta</h2>
                  </div>
                </label>
                <label htmlFor={"i13-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, thirteen: false }))}
                  >
                    <input name={"13"} type="radio" id={"i13-3"} />
                    <h2>C - 10 ta</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 13 */}
          {/* test 14 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>14. Gradient rang berishni necha xili bor ?</h1>
              </div>
              <div className="radios">
                <label htmlFor={"i14-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fourteen: true }))}
                  >
                    <input name={"14"} type="radio" id={"i14-1"} />
                    <h2>A - 2 xil</h2>
                  </div>
                </label>
                <label htmlFor={"i14-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fourteen: false }))}
                  >
                    <input name={"14"} type="radio" id={"i14-2"} />
                    <h2>B - 3 xil</h2>
                  </div>
                </label>
                <label htmlFor={"i14-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fourteen: false }))}
                  >
                    <input name={"14"} type="radio" id={"i14-3"} />
                    <h2>C - 4 xil</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 14 */}
          {/* test 15 */}
          <Bounce left>
            <div className="test">
              <div className="line">
                <h1>
                  15. Animatsiyani har doim ishlashi uchun qaysi xususiyat
                  ishlatiladi ?
                </h1>
              </div>
              <div className="radios">
                <label htmlFor={"i15-1"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fifteen: false }))}
                  >
                    <input name={"15"} type="radio" id={"i15-1"} />
                    <h2>A - linear</h2>
                  </div>
                </label>
                <label htmlFor={"i15-2"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fifteen: true }))}
                  >
                    <input name={"15"} type="radio" id={"i15-2"} />
                    <h2>B - infinite</h2>
                  </div>
                </label>
                <label htmlFor={"i15-3"}>
                  <div
                    className="line"
                    onClick={() => setstate((p) => ({ ...p, fifteen: false }))}
                  >
                    <input name={"15"} type="radio" id={"i15-3"} />
                    <h2>C - inherit</h2>
                  </div>
                </label>
              </div>
            </div>
          </Bounce>
          {/* test 15 */}

          <Button onClick={copmlete}>Tugatish</Button>
        </>
      ) : (
        <Card>
          <Button onClick={again}>Qayta Test Yechish</Button>
          <h1>15-tadan {score} tog'ri</h1>
        </Card>
      )}
    </Style>
  );
};

export default Tests;
