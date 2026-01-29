import zipfile
import xml.etree.ElementTree as ET
import os
import re
import sys

import sys
sys.stdout.reconfigure(encoding='utf-8')

def extract_text_from_pptx(pptx_path):
    if not os.path.exists(pptx_path):
        print(f"Error: File not found - {pptx_path}")
        return

    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            # Find slide files
            slides = [f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            
            # Sort slides by number # ppt/slides/slide1.xml
            def get_slide_number(filename):
                match = re.search(r'slide(\d+)\.xml', filename)
                return int(match.group(1)) if match else 0
            
            slides.sort(key=get_slide_number)

            print(f"Found {len(slides)} slides.\n")

            namespaces = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}

            for slide_file in slides:
                slide_num = get_slide_number(slide_file)
                print(f"--- SLIDE {slide_num} ---")
                
                with z.open(slide_file) as f:
                    xml_content = f.read()
                    root = ET.fromstring(xml_content)
                    
                    # Find all text elements
                    # Valid paths usually involve p:sp -> p:txBody -> a:p -> a:r -> a:t
                    # But simpler is to find all a:t in the document
                    text_elements = root.findall('.//a:t', namespaces)
                    
                    slide_text = []
                    for elem in text_elements:
                        if elem.text:
                            slide_text.append(elem.text)
                    
                    print("\n".join(slide_text))
                    print("\n" + "="*30 + "\n")

    except Exception as e:
        print(f"Error processing file: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pptx_text.py <pptx_file>")
    else:
        extract_text_from_pptx(sys.argv[1])
