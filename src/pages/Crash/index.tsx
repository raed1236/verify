import { useState } from "react";
import { Checking, Input, PageTemplate } from "components";
import { calculateCrashResult, CrashResult } from "calculates";
import { globalConfig } from "config";

const Crash = () => {
  const [serverSeed, setServerSeed] = useState("");
  const [numberOfGames, setNumberOfGames] = useState("10");

  const [tableData, setTableData] = useState<CrashResult[]>([]);

  const calculate = () => {
    const result = calculateCrashResult(
      globalConfig.crash.clientSeed,
      serverSeed,
      numberOfGames,
    );
    setTableData(result);
  };

  return (
    <div className={"mainWrapper"}>
      <PageTemplate>
        <ul>
          <li>
            Client Seed (Bitcoin Block): This is a randomly chosen future block
            number's block hash during seeding event.
          </li>

          <li>
            Server Seed: This is the server seed of the chain generated in the
            start for 10,000,000 rounds. The last seed (i.e., first round)'s
            seed is always public so that you can check that we did not change
            the server seed in the middle of the games.
          </li>
        </ul>

        <p>
          This page allows you to determine the fairness of the mechanism used
          in our Crash game.
        </p>

        <ul>
          <li>
            We start by generating 10 M hashes, starting with a server seed
            which is continuously hashed with SHA-256 till we have 10M hashes.
          </li>
          <li>
            The last hash of the series is
            <code> {globalConfig.crash.seriesHash}</code>. This is so that you
            know that we have not changed the chain of our hashes in our favour.
            By making it public, we prevent ourselves from changing any hashes
            in the chain.
          </li>
          <li>
            We will play all the hashes in reverse order. Starting from 10M (th)
            hash to 1st.
          </li>
          <li>
            In order to make sure that we don't choose a server seed in our
            favour, we use a client seed which comes from a Bitcoin block (
            {globalConfig.crash.bitcoinBlockSeed}) from the future. The block
            number is chosen before it is mined, so we don't have any way to
            predict its hash. Every 4-5 years (roughly), our hashes will exhaust
            and we will have another seeding event to generate the new list of
            hashes and select a new Bitcoin block in the future.
          </li>
        </ul>

        <p>
          The Bitcoin Block is chosen and referenced at a third-party forum such
          as Bitcoin Talk. The link to our seeding event is as follows:
          <a href={globalConfig.crash.bitcoinTalkLink}>
            {globalConfig.crash.bitcoinTalkLink}
          </a>
        </p>

        <Checking />

        <div className="pageContent">
          <div className="inputsRow">
            <Input
              title="Client Seed (Bitcoin Block)"
              subTitle="This Client Seed comes from a Bitcoin Block"
              value={globalConfig.crash.clientSeed}
              disabled
            />
          </div>

          <div className="inputsRow">
            <Input
              title="Server Seed"
              subTitle="Server Seed is generated by the server. It is only shared with you after you rotate the seed."
              value={serverSeed}
              onChange={({ target }) => setServerSeed(target.value)}
            />
            <Input
              title="Number of Games"
              subTitle="Number of rounds you want in reference to this (round associated with the server seed) game."
              value={numberOfGames}
              onChange={({ target }) => setNumberOfGames(target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-info marginTop"
            onClick={calculate}>
            Calculate
          </button>

          <div className="tableWrapper">
            {tableData.length ? (
              <table className="table table-hover marginTop">
                <thead>
                  <tr>
                    <th scope="col">Game hash</th>
                    <th scope="col">Crash point</th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map(({ crashPoint, gameHash }) => (
                    <tr key={gameHash} className="table-active">
                      <td>{gameHash}</td>
                      <td>{crashPoint + "x"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </PageTemplate>
    </div>
  );
};

export default Crash;
