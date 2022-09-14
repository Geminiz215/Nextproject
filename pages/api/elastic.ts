import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const Mydata = async () => {
  let datas = await axios({
    method: "get",
    url: "http://localhost:9200/my_elasticsearch/_search",
    data: {
      query: {
        match: {
          first_name: "udin",
        },
      },
    },
  });
  return datas.data.hits;
};

export default function elastic(req: NextApiRequest, res: NextApiResponse) {
  Mydata().then(x => {
    console.log(x)
    res.status(200).send({ message: x });
});
}
