import { Card, CardContent, CardHeader } from '../ui/card';

function CardWithChecklist() {
  return (
    <Card>
      <CardHeader>For Managers</CardHeader>
      <CardContent>
        <ul>
          <li>Prepares 1:1s</li>
          <li>highlights priorities</li>
          <li>coaches in context</li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default CardWithChecklist;
