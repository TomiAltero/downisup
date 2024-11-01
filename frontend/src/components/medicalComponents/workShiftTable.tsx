import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Padre", "Hijo", "Fecha Turno", "Fecha Solicitacion", "Área"];

const TABLE_ROWS = [
  {
    name: "Tomas Altero",
    job: "Tomas Altero",
    date: "19/09/2024",
    solicitation: "10/09/2024",
    area: "Fonoaudiología",
  },
  {
    name: "Tomas Altero",
    job: "Tomas Altero",
    date: "19/09/2024",
    solicitation: "10/09/2024",
    area: "Fonoaudiología",
  },
  {
    name: "Tomas Altero",
    job: "Tomas Altero",
    date: "19/09/2024",
    solicitation: "10/09/2024",
    area: "Fonoaudiología",
  },
];

export function DefaultTable() {
  return (
    <Card className="w-full h-auto dark:bg-gray-900 dark:text-white">
      <div className="p-4">
        <Typography variant="h5" color="blue-gray" className="mb-4 font-bold dark:bg-gray-900 dark:text-white">
          Turnos Registrados
        </Typography>
        <table className="w-full table-auto text-left dark:text-white">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 dark:text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date, solicitation, area }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-white"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-white"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-white"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-white"
                    >
                      {solicitation}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-white"
                    >
                      {area}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

