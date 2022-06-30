import * as React from "react";

import {DropZone} from '../components/core/DropZone'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function playground({ text }) {



	return (
    <DndProvider backend={HTML5Backend}>
			<DropZone></DropZone>
      {/* Here, render a component that uses DND inside it */}
    </DndProvider>

	);
}
