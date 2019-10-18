import React, { FunctionComponent } from "react";
import { Link } from "walls";

import Card from "../Card";
import Divider from "../Divider";
import List from "../List";
import ListItem from "../List/ListItem";
import Typography from "../Typography";
import Button from "../Button";
import useStyles from "./index.styles";

type Props = {
  title: string;
  items: any[];
};

const Listing: FunctionComponent<Props> = ({ title, items }) => {
  const classes = useStyles();

  return (
    <Card>
      <Typography variant="h6" component="h2" gutterBottom>
        {title}
      </Typography>

      <List>
        {items &&
          items.map((item) => {
            const { id, name } = item;

            return (
              <ListItem key={id}>
                <Link to={`/patternlibs/${id}/`}>
                  <Typography variant="body2" className={classes.listTitle}>
                    {name}
                  </Typography>
                </Link>
              </ListItem>
            );
          })}
      </List>

      <Divider isInCard />

      <Link to={`/patternlibs`}>
        <Button>View all Pattern Libraries</Button>
      </Link>
    </Card>
  );
};

export default Listing;
