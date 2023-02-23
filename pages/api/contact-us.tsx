import axios from "axios";

const contactUsFunction = axios.create({
  baseURL: 'https://europe-west1-contact-us-377410.cloudfunctions.net/contact-us-function',
})

export default function handler(req: any, res: any) {
  contactUsFunction.post('', {
    "MailRequest": {
      "From": {
          "Address": "matteo.budriesi@webion.it",
          "Name": "Davide Messori"
      },
      "To": [{
          "Address": "matteo.budriesi@webion.it",
          "Name": "Davide Messori"
      }],
      "Cc": [{
          "Address": "matteo.budriesi@webion.it",
          "Name": "Stefano Calabretti"
      }],
      "Bcc": []
    },
    "ApiKey": "wbn_rG4RKg8A_M6kYhBj6ARG4QoYDh3t7iLk7lVcdta8ESimh5ArT6MufPbHI0pWjB1pZBFK3C812",
    "Customer": {
        "Email": "davide.messori@webion.it",
        "CompanyType": "SRL",
        "Services": "Siti web",
        "Name": "Davido"
    },
    "Message": "test",
    "BodyTemplate": "webion.it.contactus.body",
    "SubjectTemplate": "webion.it.contactus.sub"
  })
  .then(r => res.status(200).json(r))
}