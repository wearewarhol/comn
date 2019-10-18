import React, { Fragment, FunctionComponent } from "react";
import { Link } from "walls";
import Card from "../Card";
import Divider from "../Divider";
import Typography from "../Typography";

type Props = {
  organisation?: any;
  baseUrl: string;
  id: string;
  name: string;
  updatedAt: string;
  actions?: any;
};

const ListCard: FunctionComponent<Props> = ({
  id,
  name,
  organisation,
  baseUrl,
  actions,
  children,
}) => (
  <Card>
    <Typography variant="h5" gutterBottom>
      {organisation && (
        <Typography variant="body1" component="span" isInline>
          {organisation.organisationName} /{" "}
        </Typography>
      )}

      <Link to={`${baseUrl}/${id}`}>{name}</Link>
    </Typography>

    {children}

    {actions && (
      <Fragment>
        <Divider isInCard />

        {actions}
      </Fragment>
    )}
  </Card>
);

export default ListCard;
