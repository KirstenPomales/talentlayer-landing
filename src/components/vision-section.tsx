import Image from "next/image";

import { Container } from "./layout/container";
import { Button } from "./ui/button";

export const VisionSection = () => {
  return (
    <section className="bg-base-content py-24 text-base-100">
      <Container className="relative flex flex-col items-center gap-20 pb-40 pt-14 sm:pt-40 md:flex-row">
        <div className="order-2 flex flex-col gap-10">
          <h3 className="mb-2 text-5xl font-bold">
            👩 empower your users with{" "}
            <span className="italic text-primary">interoperable reputation</span>
          </h3>
          <p className="text-base-100/80">
            TalentLayer enables workers and hirers to grow one unified and user-owned reputation
            across all integrated platforms.{" "}
            <a className="text-primary">this is possible thanks to blockchain technology</a> - work
            history, reviews, and transactions are stored on-chain at the network level.
          </p>
          <p className="text-base-100/80">
            what does that mean for users? their reputation is owned by them, forever - backed by
            the blockchain and accessible everywhere.
          </p>
          <div className="flex flex-col gap-4 min-[500px]:flex-row">
            <a
              href="https://docs.talentlayer.org/basics/basics/what-is-talentlayer-id"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button color="secondary" className="whitespace-nowrap text-black" size="lg" block>
                meet TalentLayer ID
              </Button>
            </a>
            <a
              href="https://medium.com/talentlayer/the-business-case-for-breaking-down-silos-3d3952cde260"
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button className="whitespace-nowrap" size="lg" block>
                why interoperability?
              </Button>
            </a>
          </div>
        </div>
        <div className="order-2 flex flex-col gap-10">
          <div className="order-1 sm:order-3 sm:block">
            <Image src="/shria.png" width={800} height={600} alt="TalentLayer" />
          </div>
        </div>
      </Container>
    </section>
  );
};
