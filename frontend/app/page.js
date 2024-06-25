import {Avatar, Box, Container} from "@mui/material";
import React from 'react';

export default function Home() {
  return (
      <main className="flex flex-col lg:flex-row min-h-screen">
          {/* Information displayed in left side */}
          <div className="w-full lg:w-5/12 lg:h-screen p-4 lg:sticky lg:top-0">
              <Container>
                  <Box sx={{flexGrow: 1}}>
                      <img
                          src="/picture.png"
                          alt="Profile picture"
                          className="w-full h-auto"
                      />
                  </Box>
              </Container>
          </div>

          {/* Information displayed in right side */}
          <div className="w-full lg:w-7/12 lg:h-screen overflow-y-scroll p-4 scrollable-content">
              <Container>
                  <h1 className="text-4xl mb-4">Scrollable Content</h1>

                  {/* Long content */}
                  <div className="space-y-4">
                      {Array.from({ length: 50 }).map((_, index) => (
                          <p key={index}>Data</p>
                      ))}
                  </div>
              </Container>
          </div>


      </main>
);
}
