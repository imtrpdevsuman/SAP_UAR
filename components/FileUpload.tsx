'use clinet';
import React from 'react';
import { FileUploader, Button, Table, TableCell, TableRow, TableColumn, Label } from '@ui5/webcomponents-react';
import {FileCheck2} from 'lucide-react';

const FileUpload = () => {
  return (
    <div className='bg-slate-200 h-[90vh] p-2 overflow-hidden '>
      <h1 className='bg-white font font-medium p-2 border rounded-t-lg border-gray-400'>Data Upload</h1>
      <div className='bg-white p-4 border border-gray-400 flex gap-4 rounded-b-lg'>
          <Table className='h-[60vh] border border-gray-400 rounded-md shadow-md'
            accessibleName=""
            columns={<><TableColumn style={{width: '2rem'}}><Label>Sync ID</Label></TableColumn><TableColumn minWidth={200} popinText="For Period"><Label>For Period</Label></TableColumn><TableColumn demandPopin minWidth={200} popinText="Report Name"><Label>Report Name</Label></TableColumn><TableColumn demandPopin minWidth={200} popinText="Synced At"><Label>Synced At</Label></TableColumn><TableColumn><Label>Synced By</Label></TableColumn><TableColumn><Label>Process Started At</Label></TableColumn><TableColumn><Label>Process Started By</Label></TableColumn><TableColumn><Label>Preview</Label></TableColumn></>}
          >
            <TableRow>
              <TableCell>
                <Label>
                  1
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  User_Details.xlxs
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Deep Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  2
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Roles_Details.xlxs
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Racktim Guin
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  3
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  User_Details.xlxs
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Deep Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  4
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Manager_Details.xlxs
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Raktim Guin
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  5
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Roles_Details.xlxs
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Deep Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>            
          </Table>
          <div className='h-[50vh] w-[20vw] border border-slate-400 rounded-lg p-8 shadow-md'>
              <div className='bg-white h-90px w-90vw p-5 mt-20'>
                <FileUploader placeholder="Choose a file for upload..."
                  accept=".xlsx, .csv"
                  // onChange={function _a(){}}
                />
                <Button className='border-2 border-blue-500 hover:opacity-75 ml-16'>
                    Upload
                </Button>
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default FileUpload