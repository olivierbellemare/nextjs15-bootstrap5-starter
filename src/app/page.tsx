import Image from "next/image";
import NextLogo from "@components/brand/NextLogo";
import MyCard1 from "@components/MyCard1";
import MyCard2 from "@components/Mycard2";
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import CardText from 'react-bootstrap/CardText';
import Link from "next/link";

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Home page</h1>
            <NextLogo className="w-50 my-5" style={{ color: "var(--off-white)" }} />
             <h2 className="mb-4"><span className="px-4 py-1 rounded-1" style={{ background: "var(--White70)" }}>What is Lorem Ipsum?</span></h2>
             <h3 className="mb-4"><span className="px-4 py-1 rounded-1" style={{ background: "var(--White30)" }}>Lorem Ipsum is simply dummy text latest</span></h3>
            <p className="w-50 mx-auto">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>          
          </div>
          <div className="col-12">
            <Image
              aria-hidden
              src="/assets/images/img.png"
              alt="img"
              width={0}
              height={0}
              sizes="100vw"
              className="w-25 h-auto mx-auto"
            />
          </div>
          <div className="col-12 text-center">
            <Link href="/about" className="text-decoration-underline">Go to About page</Link>
            <button className="px-4 py-2 m-4">Button</button>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <MyCard1 
              title="My title" 
              description="Contrary to popular belief, Lorem Ipsum is not simply random text." 
              cardClassName="card border-0" 
              titleClassName="card-title"
            />
          </div>
          <div className="col-4">
            <MyCard2>
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                </div>
              </div>
            </MyCard2>
          </div>
          <div className="col-4">
            <Card>
              <CardBody>
                <CardTitle>Card title React-Bootstrap</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      
    </section>
  );
}
