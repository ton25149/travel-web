import React, {useEffect} from 'react'
import "./main.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import {BsClipboard2Check} from "react-icons/bs";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Tbilisi",
    location: "Georgia",
    grade: "City",
    fees: "$700",
    description:
      "เมืองหลวงคงเอกลักษณ์แบบเมืองเก่าไว้เป็นอย่างดี อาคารบ้านเรือนที่ผสมผสานสถาปัตยกรรมของแต่ละยุค ถ้าอยากเห็นเมืองในมุมสูง มีเคเบิลคาร์จากสวนไรค์ (Rike Park) รอบริการนักท่องเที่ยวให้ขึ้นไปชมวิวแบบพาโนรามาบนป้อมปราการนาริกาลา (Narikala) ด้านบนด้วย",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Sydney",
    location: "Australia",
    grade: "City",
    fees: "$800",
    description: "ท่าเรือซิดนีย์ ชายหาด และ ศูนย์กลางแห่งย่านธุรกิจนี้ จะทำให้คุณไม่สามารถว่างจากการทำกิจกรรมและสิ่งให้ชื่นชมเลย ด้วยมีพลเมืองจากหลากหลายวัฒนธรรม ทำให้ซิดนีย์นั้นเป็นจุดหมายปลายทางของทุกคนทั่วโลก ซึ่งหากแวะเที่ยวเพียงไม่กี่วัน ควรเน้นการท่องเที่ยวชื่นชมสีสันในเมืองเป็นหลัก",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Aoraki-Mount Cook",
    location: "New Zealand",
    grade: "Relax",
    fees: "$900",
    description: "เอโอรากิ-เมาท์คุก (Aoraki-Mount Cook) คืออีกหนึ่งอุทยานแห่งชาติที่หลายคนต้องมาเยือนเลยแหละ ที่นี่มีทั้งภูเขาที่พีคและสวยที่สุดของนิวซีแลนด์ นั่นก็คือเมาท์คุก (Mount Cook) นั่นเอง แถมยังมีแทร็คเดินเทรลอย่าง แทร็คฮุคเกอร์วัลเลย์ (Hooker Valley Track) ที่ส่วนตัวก๊อตประทับใจมากที่สุดของทริปนิวซีแลนด์ทริปนี้อีกด้วย ใครที่เป็นสายธรรมชาติ สายเดินเทรล สายถ่ายรูปทั้งแลนด์สเคป หรือถ่ายรูปพีคๆ ลง Instagram แนะนำให้ปักหมุดและลุยโลดด มันดีย์จริงๆ",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Lago di braies",
    location: "Austria",
    grade: "Relax",
    fees: "$400",
    description: "Lago di braies หรือถ้าเซิจแล้วเจอ Pragser Wildsee ก็ให้รู้ไว้ว่ามันที่เดียวกัน อยู่ทางเหนือของอิตาลี อยู่ในอุทยานบริเวณเดียวกันกับ Dolomites ซึ่งในทริปเรา มันอยู่ระหว่างทางจาก Innsbruck, Austria ไป Venice, Italy",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Grindelwald",
    location: "Switzerland",
    grade: "Village",
    fees: "$500",
    description: "หมู่บ้านเล็กๆ ใจกลางหุบเขาบน เทือกเขา Burnese Alps แห่งรัฐเบิร์น (Bern) ที่มีความสูงจากระดับน้ำทะเล 1,034 เมตร แม้จะเป็นหมู่บ้านเล็กๆ แต่กลับมีวิวสวยหลักล้าน รายล้อมไปด้วยทิวทัศน์สุดอลังการของเทือกเขาอันยิ่งใหญ่ ทิวสน และทุ่งหญ้าสีเขียวขจี เป็นจุดหมายของนักสกีหิมะในยามหน้าหนาว และคนที่โหยหาอากาศบริสุทธิ์ และสดใสในช่วงฤดูร้อน แถมยังขึ้นชื่อว่าเป็น ประตูสู่ภูมิภาคยุงเฟรา เพราะเป็นหนึ่งในหมู่บ้านซึ่งเป็นทางผ่านก่อนจะเดินทางขึ้นไปยัง ยอดเขายุงเฟรา (Jungfrau) ด้วย",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Ko Lao Lading",
    location: "Krabi",
    grade: "Island",
    fees: "$600",
    description: "กาะเหลาลาดิง หรืออีกชื่อเรียกคือ เกาะละดิง ตั้งอยู่ใน อุทยานแห่งชาติธารโบกขรณี อำเภออ่าวลึก จังหวัดกระบี่ เป็นเกาะขนาดเล็กๆ ที่มีชายหาดโค้งเว้าสวยงาม ซ่อนอยู่หลังหินปูน ในเรื่องของบรรยากาศนั้น ก็ค่อนข้างเงียบสงบ และมีความใสของน้ำทะเล ให้เราได้ลงเล่นกัน หรือจะนอนชิลๆ บนหาดทรายสีขาวก็ดีไม่แพ้กันเลย ทำให้ที่นี่ถูกขนานนามว่าเป็น Paradise Island นั่นเอง",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Osaka",
    location: "Japan",
    grade: "7",
    fees: "$700",
    description: "โอซาก้า เมืองแห่งสีสันของญี่ปุ่น พร้อมกับอัปเดต 15 ที่เที่ยวโอซาก้า ตามไลน์ สถานีรถไฟ กันค่ะ ซึ่งหลากหลายมากๆ ทั้ง ศาลเจ้า สวนสนุก แหล่งช้อปปิ้ง ร้านอาหาร ของอร่อยๆ แถมงานนี้รับรองว่าไม่ต้องกลัวหลงแน่ๆ เดินทางง่าย แค่ขึ้นรถไฟไปเท่านั้นเอง",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Vikurkirkja",
    location: "Iceland",
    grade: "8",
    fees: "$800",
    description: "Vikurkirkja คือโบสถ์หลักในเมืองเรคยาวิกุรีร์กาวิกัต ประเทศไอซ์แลนด์ โบสถ์นี้เป็นที่นับถือสำคัญและเป็นที่รู้จักในเครื่องประดับแห่งเมืองเรคยาวิกุรีร์กาวิกัต โดยมีโครงสร้างที่มีความสูงถึง 73 เมตร ภายในโบสถ์จะมีองค์ประกอบทางศิลปะที่น่าสนใจ เช่น อัญมณีแบบไอซ์แลนด์และหลอดไฟขนาดใหญ่ที่อุดมไปด้วยแสงสีสัน",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Hallstatt",
    location: "Austria",
    grade: "Village",
    fees: "$900",
    description: "Hallstatt ตั้งอยู่บนทางซ้ายของทะเลสาบ Hallstättersee และมีบ้านเรือนที่สวยงามและสะดวกสบาย นอกจากนี้ยังมีสถานที่ท่องเที่ยวอื่นๆ เช่น พิพิธภัณฑ์ของเมืองเก่า (Hallstatt Heritage Museum) และการท่องเที่ยวบนเขา Saltberg เพื่อชมวิวที่สวยงามของเมืองและทะเลสาบ",
  },
];

const Main = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Places</h3>
      </div>

      <div data-aos="fade-up" className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name"> {location} </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5> {fees} </h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">Details <BsClipboard2Check className="icon" /> </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
