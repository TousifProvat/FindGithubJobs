// eslint-disable

import React, { useState } from 'react';
import { Badge, Button, Card, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body style={{ position: 'relative' }}>
        <div className="d-felx  justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{' '}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div className="mt-2" style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            alt={job.company}
            src={job.company_logo}
            style={{ position: 'absolute', right: '9px', top: '15px' }}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="primary"
          >
            {open ? ' Hide Details ' : ' View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
